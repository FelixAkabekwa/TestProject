using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Asp.NetCore_REACT.Models;

namespace Asp.NetCore_REACT.Data
{
    public class AspNetCore_REACTContext : DbContext
    {
        public AspNetCore_REACTContext (DbContextOptions<AspNetCore_REACTContext> options)
            : base(options)
        {
        }

        public DbSet<Asp.NetCore_REACT.Models.Continent> Continent { get; set; } = default!;
    }
}
