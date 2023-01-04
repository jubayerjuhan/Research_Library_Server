export class PostSearch {
  constructor(postModel, query) {
    (this.postModel = postModel), (this.query = query);
  }

  async getPost() {
    const allPosts = await this.postModel.find().populate("author");
    this.allPosts = allPosts;
    return this;
  }
  async search(searchQuery) {
    if (!searchQuery) return this;
    const searchedPosts = await this.postModel
      .find({
        title: { $regex: searchQuery, $options: "i" },
      })
      .populate("author");
    this.allPosts = searchedPosts;
    return this;
  }
}
