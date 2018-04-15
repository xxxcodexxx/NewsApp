using NEWS.CORE.Interface;
using NEWS.CORE.Models;
using NEWS.CORE.Services;
using NEWS.CORE.UnitOfWork;

namespace NEWS.SERVICES.Business
{
    public class AccountServices : BaseServices<Account>, IAccountServices
    {
        public AccountServices(IRepository<Account> repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork)
        {
        }
    }
}
