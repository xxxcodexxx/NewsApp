using NEWS.CORE.Interface;
using NEWS.CORE.Models;
using NEWS.CORE.Services;
using NEWS.CORE.UnitOfWork;

namespace NEWS.SERVICES.Business
{
    public class FeedbackServices : BaseServices<Feedback>, IFeedbackServices
    {
        public FeedbackServices(IRepository<Feedback> repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork)
        {
        }
    }
}
