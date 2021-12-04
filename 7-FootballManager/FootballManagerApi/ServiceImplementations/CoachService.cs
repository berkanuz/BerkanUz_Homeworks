using FootballManagerApi.Data;
using FootballManagerApi.Entities;
using FootballManagerApi.ServiceAbstracts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FootballManagerApi.ServiceImplementations
{
    public class CoachService : ICoachService
    {
        private readonly ApplicationDbContext _context;
        public CoachService(ApplicationDbContext context)
        {

            _context = context;
        }
        public async Task<Coach> CreateAsync(Coach coach)
        {
            _context.Coaches.Add(coach);
            await _context.SaveChangesAsync();

            return coach;
        }
        public async Task DeleteAsync(int id)
        {
            var coach = await _context.Coaches.FindAsync(id);
            if (coach == null)
            {
                throw new Exception("Koç Bulunamadı");
            }

            _context.Coaches.Remove(coach);
            await _context.SaveChangesAsync();


        }
        public async Task<IEnumerable<Coach>> GetAllAsync()
        {
            return await _context.Coaches.ToListAsync();
        }

        public async Task<Coach> GetAsync(int id)
        {
            var coach = await _context.Coaches.FindAsync(id);
            return coach;
        }
        private bool CoachExists(int id)
        {
            return _context.Coaches.Any(e => e.Id == id);
        }
        public async Task UpdateAsync(int id, Coach coach)
        {
            if (id != coach.Id)
            {
                throw new Exception("IDler uyuşmadı");
            }

            _context.Entry(coach).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CoachExists(id))
                {
                    throw new Exception("Koç Yok");
                }
                else
                {
                    throw;
                }
            }
        }
        public async Task<IEnumerable<Coach>> GetCoachwithTacticssAsync()
        {
            return await _context.Coaches.Include(p => p.Tactics).ToListAsync();
        }
    }
}