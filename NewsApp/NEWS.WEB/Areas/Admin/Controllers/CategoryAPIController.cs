using System.Net.Http;
using System.Linq;
using System.Web.Http;
using NEWS.WEB.Models;

namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class CategoryAPIController : BaseAPIController
    {
        DBContext db = new DBContext();

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(db.Categories.ToList());
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Category item)
        {
            item.Status = (int?)CommonStatus.Acitivy;
            db.Categories.Add(item);
            return ToJson(db.SaveChanges());
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Category item)
        {
            var obj = db.Categories.FirstOrDefault(u => u.CategoryId == item.CategoryId);
            obj = item;
            return ToJson(db.SaveChanges());
        }

        [HttpDelete]
        public HttpResponseMessage Delete(Category item)
        {
            var obj = db.Categories.FirstOrDefault(u => u.CategoryId == item.CategoryId);
            obj.Status = (int?)CommonStatus.Deleted;
            return ToJson(db.SaveChanges());
        }
    }
}