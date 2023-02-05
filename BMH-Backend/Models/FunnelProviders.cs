using Microsoft.Data.SqlClient;
using System.Globalization;

namespace BMH_Backend.Models
{
  public static class FunnelProviders
  {
    public static string[] States = new string[]
    {
       "alabama","alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada"
    };

    public static List<Provider> allProviders = new List<Provider>();


    public static List<Provider> GetProviderNames()
    {
      string connectionString = "Server=tcp:storm-db-server.database.windows.net,1433;Initial Catalog=BmhMatters_App;Persist Security Info=False;User ID=NunuMarie3000;Password=Fairy#01;MultipleActiveResultSets=True;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

      for (int i = 0; i < States.Length; i++)
      {
        SqlConnection con = new SqlConnection(connectionString);
        con.Open();
        //string query = $"select name from {States[ 0 ]}";
        string query = $"select * from {States[ i ]}";

        SqlCommand cmd = new SqlCommand(query, con);

        SqlDataReader dr = cmd.ExecuteReader();

        do
        {
          //int counter = dr.FieldCount;
          while (dr.Read())
          {
            Provider newprovider = new Provider();
            if (!dr.IsDBNull(4))
            { newprovider.Name = dr.GetValue(4).ToString(); }
            if (!dr.IsDBNull(5))
            { newprovider.Title = dr.GetValue(5).ToString(); }
            if (!dr.IsDBNull(6))
            { newprovider.Pronouns = dr.GetValue(6).ToString(); }
            if (!dr.IsDBNull(7))
            { newprovider.AboutSection = dr.GetValue(7).ToString(); }
            if (!dr.IsDBNull(8))
            { newprovider.CostPerSession = dr.GetValue(8).ToString(); }
            if (!dr.IsDBNull(9))
            { newprovider.slidingScale = dr.GetValue(9).ToString(); }
            if (!dr.IsDBNull(10))
            { newprovider.Headshot = dr.GetValue(10).ToString(); }
            if (!dr.IsDBNull(11))
            { newprovider.Phone = dr.GetValue(11).ToString(); }
            if (!dr.IsDBNull(12))
            { newprovider.Address1 = dr.GetValue(12).ToString(); }
            if (!dr.IsDBNull(13))
            { newprovider.Address2 = dr.GetValue(13).ToString(); }
            if (!dr.IsDBNull(14))
            { newprovider.City = dr.GetValue(14).ToString(); }
            if (!dr.IsDBNull(15))
            { newprovider.State = dr.GetValue(15).ToString(); }
            if (!dr.IsDBNull(16))
            { newprovider.ZipCode = dr.GetValue(16).ToString(); }
            if (!dr.IsDBNull(17))
            { newprovider.Specialties = dr.GetValue(17).ToString(); }
            if (!dr.IsDBNull(18))
            { newprovider.Issues = dr.GetValue(18).ToString(); }
            if (!dr.IsDBNull(19))
            { newprovider.Communities = dr.GetValue(19).ToString(); }
            newprovider.ProviderId = Guid.NewGuid().ToString();

            newprovider.AssociatedState = CultureInfo.CurrentCulture.TextInfo.ToTitleCase(States[ i ].ToLower());

            allProviders.Add(newprovider);
          }
        } while (dr.NextResult());

        con.Close();
      }
      //return alabamaNames;
      return allProviders;

    }
  }
}
