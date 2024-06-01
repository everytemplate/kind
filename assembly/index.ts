@kind
class GmKind {
  image!: Bytes32;
  desc!: Bytes32;

  meta(): Json {
    let data = json.create("{}");
    json.setString(data, "/name", "Gm!");
    json.setString(data, "/description", "Greeting from your first kind");
    return data;
  }

  picture(): Image {
    let canvas = image.load(this.image);
    return image.resize(canvas, 800, 800, 1);
  }
}
