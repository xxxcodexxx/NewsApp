using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.Google;
using Microsoft.Owin.Security.OAuth;
using Owin;
using NEWS.WEB.Providers;
using NEWS.WEB.Models;

namespace NEWS.WEB
{
    public partial class Startup
    {
        public static OAuthAuthorizationServerOptions OAuthOptions { get; private set; }

        public static string PublicClientId { get; private set; }

        // For more information on configuring authentication, please visit https://go.microsoft.com/fwlink/?LinkId=301864


        private void ConfigureAuthAPI(IAppBuilder app)
        {
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                LoginPath = new PathString("/admin"),
                LogoutPath = new PathString("/Login/Logout"),
                ExpireTimeSpan = TimeSpan.FromMinutes(5.0),
                ReturnUrlParameter = "/admin"
            });
            app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalCookie);
        }

        public void ConfigureAuth(IAppBuilder app)
        {
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                LoginPath = new PathString("/Login/Login"),
                LogoutPath = new PathString("/Login/Logout"),
                ExpireTimeSpan = TimeSpan.FromMinutes(5.0)
            });
            app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalCookie);

        }
    }
}
