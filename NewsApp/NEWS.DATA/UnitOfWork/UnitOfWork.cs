using NEWS.CORE.UnitOfWork;
using NEWS.DATA.Interface;

namespace NEWS.DATA.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IDatabaseFactory _dataBaseFactory;
        private IDataContext _dataContext;

        protected IDataContext DataContext
        {
            get
            {
                return _dataContext ?? (_dataContext = _dataBaseFactory.Get());
            }
        }

        public UnitOfWork(IDatabaseFactory databaseFactory)
        {
            this._dataBaseFactory = databaseFactory;
        }
        public int Commit()
        {
            return DataContext.Commit();
        }
    }
}
