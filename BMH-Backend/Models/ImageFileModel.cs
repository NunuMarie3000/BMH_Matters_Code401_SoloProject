using System.ComponentModel;

namespace BMH_Backend.Models
{
  public class ImageFileModel
  {
    [DisplayName("Upload Image")]
    public string FileDetails { get; set; }
    public IFormFile File { get; set; }
  }
}
