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
            return ToJson(db.Users.ToList());
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
            obj = item;
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