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
    public class PermissionAPIController : BaseAPIController
    {
        private readonly IPermissionServices _permissionServices;
        public PermissionAPIController()
        {
            IDatabaseFactory databaseFactory = new DatabaseFactory();
            IRepository<Permission> repositoryPermission = new Repository<Permission>(databaseFactory);
            IUnitOfWork unitOfWork = new UnitOfWork(databaseFactory);
            this._permissionServices = new PermissionServices(repositoryPermission, unitOfWork);
        }

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(_permissionServices.GetAll().ToList().Where(w=>w.Status == (int)Models.CommonStatus.Acitivy));
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Permission item)
        {
            item.Status = (int)Models.CommonStatus.Acitivy;
            return ToJson(_permissionServices.Add(item));
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Permission item)
        {
            return ToJson(_permissionServices.Update(item));
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var item = _permissionServices.GetById(id);
            item.Status = (int)Models.CommonStatus.Deleted;
            return ToJson(_permissionServices.Update(item));
        }
        
    }
}