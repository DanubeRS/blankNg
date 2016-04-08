using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Microsoft.Owin;
using Microsoft.Owin.Extensions;
using System.IO;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;
using StaticHostTest;

[assembly: OwinStartup(typeof(Startup))]
namespace StaticHostTest
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureStaticFiles(app);

        }
        private void ConfigureStaticFiles(IAppBuilder app)
        {
            string root = AppDomain.CurrentDomain.BaseDirectory;
            string wwwroot = Path.Combine(root, "wwwroot");

            var fileServerOptions = new FileServerOptions()
            {
                EnableDefaultFiles = true,
                EnableDirectoryBrowsing = false,
                RequestPath = new PathString(string.Empty),
                FileSystem = new PhysicalFileSystem(wwwroot)
            };

            fileServerOptions.StaticFileOptions.ServeUnknownFileTypes = true;
            app.UseFileServer(fileServerOptions);
        }
    }
}