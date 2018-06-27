using System.Net.Http;
using System.Linq;
using System.Web.Http;
using NEWS.WEB.Models;

namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class AccountAPIController : BaseAPIController
    {
        DBContext db = new DBContext();

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(db.Users.Where(w=>w.Status == (int)CommonStatus.Acitivy).ToList());
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]User item)
        {
            item.Status = (int)CommonStatus.Acitivy;
            db.Users.Add(item);
            return ToJson(db.SaveChanges());
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]User item)
        {
            var obj = db.Users.FirstOrDefault(u => u.ID == item.ID);
            obj.Password = item.Password;
            obj.Phone = item.Phone;
            obj.Email = item.Email;
            obj.FullName = item.FullName;
            obj.RoleId = item.RoleId;
            obj.UserName = item.UserName;
            return ToJson(db.SaveChanges());
        }

        [HttpDelete]
        public HttpResponseMessage Delete(User item)
        {
            var obj = db.Users.FirstOrDefault(u => u.ID == item.ID);
            obj.Status = (int)CommonStatus.Deleted;
            return ToJson(db.SaveChanges());
        }

    }
}