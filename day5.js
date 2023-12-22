function getFileExtension(filename) {
    const extensionRegex = /\.([0-9a-z]+)$/i;
    const match = extensionRegex.exec(filename);
    return match ? match[1] : null;
  }
  
  const filename1 = "example.txt";
  const filename2 = "document.docx";
  const filename3 = "image.png";
  
  console.log(`${filename1}: ${getFileExtension(filename1)}`);
  console.log(`${filename2}: ${getFileExtension(filename2)}`);
  console.log(`${filename3}: ${getFileExtension(filename3)}`);
  