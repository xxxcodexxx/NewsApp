using System.Net.Http;
using System.Linq;
using System.Web.Http;
using NEWS.WEB.Models;

namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class CategoryAPIController : BaseAPIController
    {
        DBContext context = new DBContext();

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(context.Categories.ToList());
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Category item)
        {
            return ToJson(context.Categories.Add(item));
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Category item)
        {
            var obj = context.Categories.Where(c => c.CategoryId == item.CategoryId);
            return ToJson(context.SaveChanges());
        }

        [HttpDelete]
        public HttpResponseMessage Delete(Category item)
        {
            context.Categories.Remove(item);
            return ToJson(context.SaveChanges());
        }
    }
}