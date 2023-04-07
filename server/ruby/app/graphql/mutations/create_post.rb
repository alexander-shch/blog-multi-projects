class Mutation::CreatePost < Mutations::BaseMutation
    argument :title, String, required: true
    argument :perex, String, required: true
    argument :content, String, required: true
    argument :content, String, required: true

    field :errors, [String], null: false

    def resolve(title:, perex:, content:)
        post = Post.new(title: title, perex: perex, content: content, user_id: session[:user_id])
    end
end