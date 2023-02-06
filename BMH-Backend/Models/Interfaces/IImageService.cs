namespace BMH_Backend.Models.Interfaces
{
  public interface IImageService
  {
    Task<AzureFile> UploadImageToAzure( IFormFile file );
    void DeleteImageFromAzure( string blobName );
    public bool DoesImageExist( IFormFile file );
  }
}
