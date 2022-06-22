require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @pages = []
    pgs = %w(home about contact terms privacy_policy)
    pgs.each do |page|
      @pages << Page.create!(
        name: page, 
        body: "#{page} body"
      )
    end
    # @admin_user = User.create(username: "johndoe", email: "johndoe@example.com", 
    #                           password: "password", admin: true)
  end

  test "should get home" do
    get root_url
    assert_response :success
  end

  test "should load terms page" do
    get terms_url
    assert_response :success
  end

  test "should load about page" do
    get about_us_url
    assert_response :success
  end

  test "should load privacy page" do
    get privacy_policy_url
    assert_response :success
  end

end