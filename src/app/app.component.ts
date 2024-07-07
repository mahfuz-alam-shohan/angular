import { Component, OnInit, OnDestroy } from "@angular/core";
import
{
    Router,
    NavigationStart,
    NavigationCancel,
    NavigationEnd
} from "@angular/router";
import
{
    Location,
    LocationStrategy,
    PathLocationStrategy
} from "@angular/common";
import { filter } from "rxjs/operators";
import { TranslateService } from "@ngx-translate/core";
declare let $: any;

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    providers: [
        Location,
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit, OnDestroy
{
    location: any;
    routerSubscription: any;

    constructor(
        private router: Router,
        private _translateService: TranslateService,
    )
    {
        // Add languages
        this._translateService.addLangs(['en', 'bn', 'ar']);

        // Set the default language
        this._translateService.setDefaultLang('en');

        // Use a language
        this._translateService.use('en');
    }

    ngOnInit()
    {
        this.recallJsFuntions();
    }

    recallJsFuntions()
    {
        this.router.events.subscribe(event =>
        {
            if (event instanceof NavigationStart)
            {
                $(".preloader").fadeIn("slow");
            }
        });
        this.routerSubscription = this.router.events
            .pipe(
                filter(
                    event =>
                        event instanceof NavigationEnd ||
                        event instanceof NavigationCancel
                )
            )
            .subscribe(event =>
            {
                $.getScript("../assets/js/custom.js");
                $(".preloader").fadeOut("slow");
                this.location = this.router.url;
                if (!(event instanceof NavigationEnd))
                {
                    return;
                }
                window.scrollTo(0, 0);
            });
    }

    ngOnDestroy()
    {
        this.routerSubscription.unsubscribe();
    }
}
