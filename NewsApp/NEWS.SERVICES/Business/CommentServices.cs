using NEWS.CORE.Interface;
using NEWS.CORE.Models;
using NEWS.CORE.Services;
using NEWS.CORE.UnitOfWork;

namespace NEWS.SERVICES.Business
{
    public class CommentServices : BaseServices<Comment>, ICommentServices
    {
        public CommentServices(IRepository<Comment> repository, IUnitOfWork unitOfWork) : base(repository, unitOfWork)
        {
        }
    }
}
