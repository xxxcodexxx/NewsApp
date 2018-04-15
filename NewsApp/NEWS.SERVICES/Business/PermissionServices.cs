using NEWS.CORE.Interface;
using NEWS.CORE.Models;
using NEWS.CORE.Services;
using NEWS.CORE.UnitOfWork;

namespace NEWS.SERVICES.Business
{
    public class PermissionServices : BaseServices<Permission>, IPermissionServices
    {
        public PermissionServices(IRepository<Permission> repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork)
        {
        }
    }
}
