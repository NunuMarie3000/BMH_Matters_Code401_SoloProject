using BMH_Backend.Areas.Identity.Data;
using BMH_Backend.Classes;
using BMH_Backend.Models;
using BMH_Backend.Classes;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

namespace BMH_Backend.Areas.Identity.Data;

public class BMH_DbContext: IdentityDbContext<ApplicatonUser>
{
  public DbSet<User> User { get; set; }
  public DbSet<Entry> Entries { get; set; }
  public DbSet<Provider> Providers { get; set; }
  public DbSet<UserEntry> UserEntries { get; set; }
  public DbSet<UserProvider> UserProviders { get; set; }

  public DbSet<MentalHealthTip> MentalHealthTips { get; set; }


  public BMH_DbContext( DbContextOptions<BMH_DbContext> options )
        : base(options)
  {
  }

  protected override void OnModelCreating( ModelBuilder builder )
  {
    base.OnModelCreating(builder);

    // add providers to the database
    foreach (var provider in FunnelProviders.GetProviderNames())
    {
      builder.Entity<Provider>().HasData(provider);
    }
    // manually add a few mental health tips until i create admin dashboard
    builder.Entity<MentalHealthTip>().HasData(new MentalHealthTip { Id = Guid.NewGuid().ToString(), UploadDate = DateTime.Today, Body = "\"Anyone who has never made a mistake has never tried anything new.\" -Albert Einstein. Try something outside of your comfort zone to make room for adventure and excitement in your life." });
    builder.Entity<MentalHealthTip>().HasData(new MentalHealthTip { Id = Guid.NewGuid().ToString(), UploadDate = DateTime.Today, Body = "Do your best to enjoy 15 minutes of sunshine, and apply sunscreen. Sunlight synthesizes Vitamin D, which experts believe is a mood elevator." });
    builder.Entity<MentalHealthTip>().HasData(new MentalHealthTip { Id = Guid.NewGuid().ToString(), UploadDate = DateTime.Today, Body = "Do something with friends and family - have a cookout, go to a park, or play a game. People are 12 times more likely to feel happy on days that they spend 6-7 hours with friends and family." });
    builder.Entity<MentalHealthTip>().HasData(new MentalHealthTip { Id = Guid.NewGuid().ToString(), UploadDate = DateTime.Today, Body = "Practice forgiveness - even if it's just forgiving that person who cut you off during your commute. People who forgive have better mental health and report being more satisfied with their lives." });
    builder.Entity<MentalHealthTip>().HasData(new MentalHealthTip { Id = Guid.NewGuid().ToString(), UploadDate = DateTime.Today, Body = "Be a tourist in your own town. Often times people only explore attractions on trips, but you may be surprised what cool things are in your own backyard." });
    builder.Entity<MentalHealthTip>().HasData(new MentalHealthTip { Id = Guid.NewGuid().ToString(), UploadDate = DateTime.Today, Body = "“What lies before us and what lies behind us are small matters compared to what lies within us. And when you bring what is within out into the world, miracles happen.” - Henry David Thoreau. Practice mindfulness by staying \"in the present.\"" });
    builder.Entity<MentalHealthTip>().HasData(new MentalHealthTip { Id = Guid.NewGuid().ToString(), UploadDate = DateTime.Today, Body = "Has something been bothering you? Let it all out…on paper. Writing about upsetting experiences can reduce symptoms of depression." });
    builder.Entity<MentalHealthTip>().HasData(new MentalHealthTip { Id = Guid.NewGuid().ToString(), UploadDate = DateTime.Today, Body = "Dance around while you do your housework. Not only will you get chores done, but dancing reduces levels of cortisol (the stress hormone), and increases endorphins (the body's \"feel-good\" chemicals)." });

  }

}
