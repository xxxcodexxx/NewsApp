using System;
using System.Linq;
using System.Linq.Expressions;

namespace NEWS.CORE.Services
{
    public interface IServices<T> where T : class
    {

        /// <summary>
        /// 
        /// </summary>
        IQueryable<T> Entities { get; }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        IQueryable<T> GetAll();

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        /// 
        //IQueryable<T> GetSome();

        IQueryable<T> GetAllLookUp();

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        IQueryable<T> GetAllReadOnly();

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        T GetById(int id);
        T GetById(string id);

        T GetById(int? id);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="where"></param>
        /// <returns></returns>
        T Get(Expression<Func<T, bool>> where);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="entity"></param>
        int Add(T entity);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="entity"></param>
        int Update(T entity);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="entity"></param>
        int Delete(T entity);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="where"></param>
        int Delete(Expression<Func<T, bool>> where);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="where"></param>
        /// <param name="maHints"></param>
        /// <returns></returns>
        IQueryable<T> GetMany(Expression<Func<T, bool>> where, int? maHints = null);
    }
}
