using NEWS.CORE.Interface;
using NEWS.CORE.Models;
using NEWS.CORE.Services;
using NEWS.CORE.UnitOfWork;

namespace NEWS.SERVICES.Business
{
    public class NewsServices : BaseServices<News>, INewsServices
    {
        public NewsServices(IRepository<News> repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork)
        {
        }
    }
}
