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
    public class AccountAPIController : BaseAPIController
    {
        private readonly IAccountServices _accountServices;
        public AccountAPIController()
        {
            IDatabaseFactory databaseFactory = new DatabaseFactory();
            IRepository<Account> repositoryAccount = new Repository<Account>(databaseFactory);
            IUnitOfWork unitOfWork = new UnitOfWork(databaseFactory);
            this._accountServices = new AccountServices(repositoryAccount, unitOfWork);
        }

        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(_accountServices.GetAll().ToList().Where(w=>w.Status == (int)Models.CommonStatus.Acitivy));
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Account item)
        {
            item.Status = (int)Models.CommonStatus.Acitivy;
            return ToJson(_accountServices.Add(item));
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody]Account item)
        {
            return ToJson(_accountServices.Update(item));
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            var item = _accountServices.GetById(id);
            item.Status = (int)Models.CommonStatus.Deleted;
            return ToJson(_accountServices.Update(item));
        }
        
    }
}