using System.Net.Http;
using System.Linq;
using NEWS.CORE.Interface;
using NEWS.CORE.Models;
using NEWS.CORE.Services;
using NEWS.CORE.UnitOfWork;
using NEWS.DATA;
using NEWS.DATA.Interface;
using NEWS.DATA.UnitOfWork;
using NEWS.SERVICES.Business;
using System.Web.Http;


namespace NEWS.WEB.Areas.Admin.Controllers
{
    public class CategoryAPIController : BaseAPIController
    {
        private readonly ICategoryServices _categoryServices;
        public CategoryAPIController()
        {
            IDatabaseFactory databaseFactory = new DatabaseFactory();
            IRepository<Category> repositoryCategory = new Repository<Category>(databaseFactory);
            IUnitOfWork unitOfWork = new UnitOfWork(databaseFactory);
            this._categoryServices = new CategoryServices(repositoryCategory, unitOfWork);
        }

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(_categoryServices.GetAll().ToList().Where(w=>w.Status == 0));
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Category item)
        {
            item.Status = (int)Models.CommonStatus.Acitivy;
            if (item.ParentId == null)
                item.ParentId = 0;
            return ToJson(_categoryServices.Add(item));
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Category item)
        {
            if (item.ParentId == null)
                item.ParentId = 0;
            return ToJson(_categoryServices.Update(item));
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var item = _categoryServices.GetById(id);
            item.Status = (int)Models.CommonStatus.Deleted;
            return ToJson(_categoryServices.Update(item));
        }
        
    }
}