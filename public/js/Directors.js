$(document).ready(function(){
  // $('body').on('click', '#Delete', function(){
  //   $('#ok').val($(this).val());
  // });

  // $('body').on('click', '#ok', function(){
  //   var id=$(this).val();
  //   $.get('/department/deleteDepartment/'+$(this).val(),function(todo){
  //     switch(todo.msg){
  //       case "1" :
  //         custNotify("success","نجح","لقد تم مسح القسم بنجاح","ok-sign","bounceInDown","bounceOutUp");
  //         $('[data-id = "'+id+'"]').remove();
  //         break;
  //       case "2" :
  //         custNotify("danger","فشل","لايمكن مسح القسم لوجود كيانات معتمدة عليه","warning-sign","bounceInDown","bounceOutUp");
  //         break;
  //       case "3" :
  //         custNotify("danger","فشل","لايمكن مسح القسم عام وذلك لاعتماد المنظومة عليه","warning-sign","bounceInDown","bounceOutUp");
  //         break;
  //       default:
  //         break; 
  //     }
  //   });
  // });
$('#Directors_search').on('input', function(){
    if($('#Directors_search').val().length >=1) {
      $.get('/Directors/directorssearch/'+$('#Directors_search').val(),function(result){
        $('#tbody').empty();
        $('.pagination').hide();
        for(key in result){
          $('#tbody').append('<tr data-id = "'+result[key].id+'" data-directors_name = "'+result[key].directors_name+'"><td>'+result[key].directors_name+'</td><td></td><td class="text-center"><p data-placement="top" data-toggle="tooltip" title="تعديل"><button id="Edit" class="btn btn-primary btn-xs editDirectors" value="'+result[key].id+'"data-title="Edit" data-nn="'+result[key].id+'" data-toggle="modal" data-target="#edit"><span class="glyphicon glyphicon-pencil"></spam></button></p></td><td class="text-center"><p data-placement="top" data-toggle="tooltip" title="إلغاء"><button id="Delete" class="btn btn-danger btn-xs" value="'+result[key].id+'"data-title="Delete" data-toggle="modal" data-target="#delete"><span class="glyphicon glyphicon-trash"></span></button></p></td></tr>');
        }
      });
    }
  });

  $('.editDirectors').on('click',function(){
    var myDataAttr = $(this).val();
    $('#directors_name').val($('[data-id = "'+myDataAttr+'"]').data('directors_name'));
    $('#id').val($('[data-id = "'+myDataAttr+'"]').data('id'));
  });
 
  // $('body').on('click', '#save', function (e) {
  //   e.preventDefault();
  //   $('#formDirectors').submit();
  // });

  // $("#formDepartment").submit(function(e) {
  //   var isvalidate=$("#formDepartment").valid();
  //   if(isvalidate){
  //     $.post("/department/updateDepartment", $("form").serializeObject(), function(data, error){
  //       if(data.stat !=true){
  //       } 
  //       else {
  //         if($("#tbody").children().length>=10){
  //           $("#tbody tr:last-child").remove();
  //         }
  //         $('[data-id = "'+$("form").serializeObject().id+'"]').remove();
  //         $("#tbody").prepend('<tr data-id="'+$("form").serializeObject().id+'">'+
  //           '<td>'+$("form").serializeObject().name+'</td>'+
  //           '<td class="text-left">'+$("form").serializeObject().name_en+'</td>'+
  //           '<td></td>'+
  //           '<td class="text-center">'+
  //           '<p data-placement="top", data-toggle="tooltip", title="تعديل">'+
  //           '<button id="Edit" value="'+$("form").serializeObject().id+'" data-title="Edit" data-toggle="modal" data-target="#edit" class="btn btn-primary btn-xs"><span class="glyphicon glyphicon-pencil"></span></button></p></td><td class="text-center">'+
  //           '<p data-placement="top", data-toggle="tooltip", title="إلغاء">'+
  //           '<button id="Delete" value="'+$("form").serializeObject().id+'" data-title="Delete" data-toggle="modal" data-target="#delete" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span></button></p></td></tr>');
  //         $('#name').val($("form").serializeObject().name);
  //         $('#name_en').val($("form").serializeObject().name_en);
  //         $('#edit').modal('hide');
  //         custNotify("success","نجح","تم التعديل بنجاح","ok-sign","bounceInDown","bounceOutUp");
  //       }
  //     });
  //   }
  //   return false;
  // });
  
  $("#formDirectors").validate({
    rules:{
      directors_name:{
        required: true,
      },
    },
    messages:{
      directors_name:{
        required: "الرجاء ادخال اسم القسم!",
      },
    },
    errorClass: 'custom-error',
    highlight: function(element) {
      $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
      $(element).closest('.form-group').removeClass('has-error');
    },
  });

  var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
      var p=a[i].split('=', 2);
      if (p.length == 1)
        b[p[0]] = "";
      else
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
  })(window.location.search.substr(1).split('&'));

  if(qs["msg"]==1){
    custNotify("success","نجح","تمت إضافة قسم جديد بنجاح","ok-sign","bounceInDown","bounceOutUp");
    var pageUrl = '/directors'
    window.history.pushState("","",pageUrl);
  }

  

  $('#edit').on('hidden.bs.modal', function(){
    $('.form-group').removeClass('has-error');
    $('#formDirectors').validate().resetForm();
  });
});