require "test_helper"

class SeesionControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get seesion_new_url
    assert_response :success
  end
end
