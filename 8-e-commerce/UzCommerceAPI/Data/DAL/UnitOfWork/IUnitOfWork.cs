using UzCommerce.Data.DAL.Repository;
using UzCommerce.Data.Entities;
using System;

namespace UzCommerce.Data.DAL.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<TEntity> GetRepository<TEntity>() where TEntity : BaseEntity;
        int SaveChanges();
    }
}
