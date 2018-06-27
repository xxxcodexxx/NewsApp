using System.Net.Http;
using System.Linq;
using System.Web.Http;
using NEWS.WEB.Models;

namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class PermissionAPIController : BaseAPIController
    {
        DBContext db = new DBContext();

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(db.Roles.ToList());
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Role item)
        {
            item.Status = (int)Models.CommonStatus.Acitivy;
            db.Roles.Add(item);
            return ToJson(db.SaveChanges());
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Role item)
        {
            var obj = db.Roles.FirstOrDefault(c => c.RoleId == item.RoleId);
            obj = item;
            return ToJson(db.SaveChanges());
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var obj = db.Roles.FirstOrDefault(c => c.RoleId == id);
            obj.Status = (int)CommonStatus.Deleted;
            return ToJson(db.SaveChanges());
        }
        
    }
}