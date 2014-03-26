angular.module('myApp.directives',[])
  .directive('maphilight', function() {
    return {
      restrict: 'CA',
      link: function($scope, $element, attr) {
        var has_VML,
	  has_canvas,
	  create_canvas_for,
	  add_shape_to,
	  clear_canvas,
	  shape_from_area,
	  canvas_style,
	  hex_to_decimal,
	  css3color,
	  is_image_loaded,
	  options_from_area;
      },
      compile: function(element, attrs) {
        if (!attrs.alwaysOn) {
          alwaysOn: true
        }
      }
    }
  });
             