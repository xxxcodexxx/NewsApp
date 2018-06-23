using System.Net.Http;
using System.Linq;
using System.Web.Http;
using NEWS.WEB.Models;

namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class PermissionAPIController : BaseAPIController
    {
        DBContext context = new DBContext();

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(context.Roles.ToList().Where(w => w.Status == (int)Models.CommonStatus.Acitivy));
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Role item)
        {
            item.Status = (int)Models.CommonStatus.Acitivy;
            return ToJson(context.Roles.Add(item));
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Role item)
        {
            var obj = context.Roles.Where(c => c.RoleId == item.RoleId).FirstOrDefault();
            return ToJson(context.SaveChanges());
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var obj = context.Roles.Where(c => c.RoleId == id).FirstOrDefault();
            context.Roles.Remove(obj);
            return ToJson(context.SaveChanges());
        }
        
    }
}