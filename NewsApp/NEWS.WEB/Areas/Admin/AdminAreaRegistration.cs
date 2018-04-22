using System.Web.Http;
using System.Web.Mvc;

namespace NEWS.WEB.Areas.Admin
{
    public class AdminAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Admin";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Admin_default",
                "admin",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                namespaces: new[] {"NEWS.WEB.Areas.Admin.Controllers"}
            );
            context.Routes.MapHttpRoute(
                "Admin",
                "admin/api/{controller}/{action}/{id}",
                defaults: new {area = "Admin", id = UrlParameter.Optional }
            );
        }
    }
}