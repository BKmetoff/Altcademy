# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

users = User.create([
                      {
                        email: 'seed_user1@box.bom',
                        password: 'banica12',
                        password_confirmation: 'banica12'
                      },
                      {
                        email: 'seed_user2@box.bom',
                        password: 'banica12',
                        password_confirmation: 'banica12'
                      }
                    ])

tweets = Tweet.create([
                        {
                          message: 'seed tweet 1',
                          user: users.first
                        },
                        {
                          message: 'seed tweet 2',
                          user: users.first
                        },
                        {
                          message: 'seed tweet 3',
                          user: users.last
                        },
                        {
                          message: 'seed tweet 4',
                          user: users.last
                        }
                      ])
