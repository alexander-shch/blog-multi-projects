# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.create(
    name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: "test@gmail.com",
    password: "1234",
)

5.times do 
    Post.create(
        user_id: user.id,
        title: Faker::Lorem.sentence(word_count: 3),
        content: Faker::Lorem.paragraphs(number: 2),
        perex: Faker::Lorem.words(number: 4),
    )
end
