@kind
class Thing {
  image!: Bytes32;
  description!: Bytes32;

  meta(): Json {
    let metadata = json.create("{}");
    json.setString(metadata, "/name", `Thing #${object.id}`);
    json.setString(
      metadata,
      "/description",
      "An object minted from a set using the Thing kind. Source: github.com/everytemplate/kind"
    );
    return metadata;
  }

  picture(): Image {
    let canvas = image.load(this.image);
    return image.resize(canvas, 800, 800, 1);
  }
}
