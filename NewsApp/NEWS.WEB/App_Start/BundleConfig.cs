﻿using System.Web;
using System.Web.Optimization;

namespace NEWS.WEB
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/require").Include(
                "~/node_modules/core-js/client/shim.min.js",
                "~/node_modules/zone.js/dist/zone.js",
                "~/node_modules/systemjs/dist/system.src.js",
                "~/systemjs.config.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/AdminLTE").Include(
                     "~/Scripts/adminLTE/js/adminlte.min.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                        "~/Content/Site.css",
                        "~/Content/bootstrap.css",
                        "~/node_modules/font-awesome/css/font-awesome.css",
                        "~/Content/adminLTE/AdminLTE.min.css",
                        "~/Content/adminLTE/skins/_all-skins.min.css"
                      ));
        }
    }
}
