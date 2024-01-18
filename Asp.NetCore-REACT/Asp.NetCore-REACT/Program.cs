using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Asp.NetCore_REACT.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AspNetCore_REACTContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("AspNetCore_REACTContext") ?? throw new InvalidOperationException("Connection string 'AspNetCore_REACTContext' not found.")));

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
