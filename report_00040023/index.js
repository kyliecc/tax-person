/**
 * Created by pact on 2018/1/17.
 */
window.onload = function(){
  function innerData(data){
    var data = data || {};
    var idList  = [
      "full_name",
      "english_family_name",
      "english_first_name",
      "birthday",
      "live_country_cn",
      "live_province_cn",
      "live_city_cn",
      "live_location_cn",
      "live_country_en",
      "live_province_en",
      "live_city_en",
      "live_location_en",
      "birth_country_cn",
      "birth_province_cn",
      "birth_city_cn",
      "birth_country_en",
      "birth_province_en",
      "birth_city_en",
      "tax_no_1",
      "tax_no_2",
      "tax_no_3",
      "notax_reason2_detail",
      "allot_date",
      "tog_china_tax",
      "tog_nochina_tax",
      "tog_both_tax",
      "tog_notax_reason1",
      "tog_notax_reason2",
      "tog_sign_self",
      "tog_sign_deputy",
    ];

    idList.forEach(function(id){
      if(data.hasOwnProperty(id)){
        switch(id){
          case "allot_date":
            $$class(id,0).innerHTML = data[id];
            break;
          case "tog_china_tax":
          case "tog_nochina_tax":
          case "tog_both_tax":
          case "tog_notax_reason1":
          case "tog_notax_reason2":
          case "tog_sign_self":
          case "tog_sign_deputy":
            $$class(id,data[id]).style.display = "inline-block";
            break;
          default:
            $$(id).innerHTML = data[id];
        }
      }

    })
  }
  if(window.name){
    var obj = JSON.parse(window.name);
    innerData(obj);
  }
  print();
}