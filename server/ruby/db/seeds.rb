# Checking if the user alrady exists, if yes we probably already seeded the DB
user = User.find_by_id(1)

if user
    return
end

user = User.create(
    id: 1,
    name: Faker::Name.first_name(),
    last_name: Faker::Name.last_name(),
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
