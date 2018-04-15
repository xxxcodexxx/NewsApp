using NEWS.COMMON;
using NEWS.DATA.Interface;

namespace NEWS.DATA
{
    public class DatabaseFactory : Disposable, IDatabaseFactory
    {
        private IDataContext _dataContext;
        public IDataContext Get()
        {
            ///<summary>
            /// Connect to DataBase create UnitOfWork and Reponsitory
            /// </summary>
            return _dataContext ?? (_dataContext = new NewsDbContext());
        }
        protected override void DisposeCore()
        {
            ///<summary>
            /// Freeing, releasing, or resetting Connect
            /// </summary>
            if (_dataContext != null)
            {
                _dataContext.Dispose();
            }
        }
    }
}
