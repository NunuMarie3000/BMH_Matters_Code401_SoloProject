using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using BMH_Backend.Areas.Identity.Data;
using BMH_Backend.Models.Interfaces;
using BMH_Backend.Models.Options;
using BMH_Backend.Models.Services;
using Microsoft.AspNetCore.Identity.UI.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
  options.AddPolicy("MyPolicy",
    a => a
    .WithOrigins("https://localhost:3000", "http://localhost:3000", "https://bmh-matters.netlify.app")
    .AllowAnyMethod()
    .AllowAnyHeader());
});


var connectionString = builder.Configuration.GetConnectionString("BMH_DbContextConnection") ?? throw new InvalidOperationException("Connection string 'BMH_DbContextConnection' not found.");

builder.Services.AddDbContext<BMH_DbContext>(options =>
    options.UseSqlServer(connectionString));

//builder.Services.AddDefaultIdentity<ApplicatonUser>(options => options.SignIn.RequireConfirmedAccount = true)
//    .AddEntityFrameworkStores<BMH_DbContext>();
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<IImageService, ImageService>();

builder.Services.Configure<AzureOptions>(builder.Configuration.GetSection("AzureStorageConfig"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment() || app.Environment.IsProduction())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors("MyPolicy");

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
