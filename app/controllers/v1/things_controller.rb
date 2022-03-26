class V1::ThingsController < ApplicationController
  def index
    render json: { things: [
      {
        name: 'some-thing',
        guid: 'alsdjflaskjdfljkdsafldkj'
      }
    ] }.to_json
  end
end
