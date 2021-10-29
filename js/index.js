var clickCount = 0;

$(document).ready(function(){
    $(".click_h").hide ();
    $(".here").hide ();

    /*박스 밖으로 보이는 개체들을 커버 없어졌을 시에만 보이게 하기*/
    $(".box_2").hide();
    $(".Obox_25").hide();
    $(".Obox_210").hide();
    $(".Obox_31").hide();
    $(".Obox_35").hide();
    $(".Obox_36").hide();
    $(".Obox_37").hide();
    $(".Obox_41").hide();

    /*마우스 오버했을 때 이미지 경로 바꾸기*/
    $(".box").on("mouseover", function () {
        $(".box1").attr("src", "img/plus_1.png");
        $(".box2").attr("src", "img/plus_2.png");
        $(".box2").addClass("fit");
        $(".box3").attr("src", "img/plus_3.png");
        $(".box4").attr("src", "img/plus_4.png");
        $(".box5").attr("src", "img/plus_5.png");

        $(".Mobj1").attr("src", "img/Pobj_1.png");
        $(".Mobj12").attr("src", "img/Pobj_12.png");
        $(".Mobj13").attr("src", "img/Pobj_13.png");
        $(".Mobj14").attr("src", "img/Pobj_14.png");
        $(".Mobj15").attr("src", "img/Pobj_15.png");
        $(".Obox_16").addClass("OboxAni_16_s");
        $(".Obox_17").addClass("OboxAni_17_s");
        $(".Mobj21").attr("src", "img/Pobj_21.png");
        $(".Mobj22").attr("src", "img/Pobj_22.png");
        $(".Mobj23").attr("src", "img/Pobj_23.png");
        $(".Mobj24").attr("src", "img/Pobj_24.png");
        $(".Mobj25").attr("src", "img/Pobj_25.png");
        $(".Mobj26").attr("src", "img/Pobj_26.png");
        $(".Mobj27").attr("src", "img/Pobj_27.png");
        $(".Mobj28").attr("src", "img/Pobj_28.png");
        $(".Mobj31").attr("src", "img/Pobj_31.png");
        $(".Mobj32").attr("src", "img/Pobj_32.png");
        $(".Mobj33").attr("src", "img/Pobj_33.png");
        $(".Mobj34").attr("src", "img/Pobj_34.png");
        $(".Mobj35").attr("src", "img/Pobj_35.png");
        $(".Mobj36").attr("src", "img/Pobj_36.png");
        $(".Mobj37").attr("src", "img/Pobj_37.png");
        $(".Mobj38").attr("src", "img/Pobj_38.png");
        $(".Mobj39").attr("src", "img/Pobj_39.png");
        $(".Mobj310").attr("src", "img/Pobj_310.png");
        $(".Mobj311").attr("src", "img/Pobj_311.png");
        $(".Mobj312").attr("src", "img/Pobj_312.png");
        $(".Mobj313").attr("src", "img/Pobj_313.png");
        $(".OboxAni_314").css("animation-name", "Ani_314_s");
        $(".Mobj41").attr("src", "img/Pobj_41.png");
        $(".Mobj42").attr("src", "img/Pobj_42.png");
        $(".Mobj43").attr("src", "img/Pobj_43.png");
        $(".Mobj44").attr("src", "img/Pobj_43.png");
        $(".Mobj45").attr("src", "img/Pobj_45.png");
        $(".Mobj51").attr("src", "img/Pobj_51.png");
        $(".Mobj53").attr("src", "img/Pobj_53.png");
        $(".Mobj54").attr("src", "img/Pobj_54.png");
        $(".Mobj55").attr("src", "img/Pobj_55.png");
        $(".Mobj56").attr("src", "img/Pobj_56.png");
        $(".Mobj57").attr("src", "img/Pobj_57.png");
    })

    $(".box").on("mouseleave", function () {
        $(".box1").attr("src", "img/mono_1.png");
        $(".box2").attr("src", "img/mono_2.png");
        $(".box2").removeClass("fit");
        $(".box3").attr("src", "img/mono_3.png");
        $(".box4").attr("src", "img/mono_4.png");
        $(".box5").attr("src", "img/mono_5.png");

        $(".Mobj1").attr("src", "img/Mobj_1.png");
        $(".Mobj12").attr("src", "img/Mobj_12.png");
        $(".Mobj13").attr("src", "img/Mobj_13.png");
        $(".Mobj14").attr("src", "img/Mobj_14.png");
        $(".Mobj15").attr("src", "img/Mobj_15.png");
        $(".Obox_16").removeClass("OboxAni_16_s");
        $(".Obox_17").removeClass("OboxAni_17_s");
        $(".Mobj21").attr("src", "img/Mobj_21.png");
        $(".Mobj22").attr("src", "img/Mobj_22.png");
        $(".Mobj23").attr("src", "img/Mobj_23.png");
        $(".Mobj24").attr("src", "img/Mobj_24.png");
        $(".Mobj25").attr("src", "img/Mobj_25.png");
        $(".Mobj26").attr("src", "img/Mobj_26.png");
        $(".Mobj27").attr("src", "img/Mobj_27.png");
        $(".Mobj28").attr("src", "img/Mobj_28.png");
        $(".Mobj31").attr("src", "img/Mobj_31.png");
        $(".Mobj32").attr("src", "img/Mobj_32.png");
        $(".Mobj33").attr("src", "img/Mobj_33.png");
        $(".Mobj34").attr("src", "img/Mobj_34.png");
        $(".Mobj35").attr("src", "img/Mobj_35.png");
        $(".Mobj36").attr("src", "img/Mobj_36.png");
        $(".Mobj37").attr("src", "img/Mobj_37.png");
        $(".Mobj38").attr("src", "img/Mobj_38.png");
        $(".Mobj39").attr("src", "img/Mobj_39.png");
        $(".Mobj310").attr("src", "img/Mobj_310.png");
        $(".Mobj311").attr("src", "img/Mobj_311.png");
        $(".Mobj312").attr("src", "img/Mobj_312.png");
        $(".Mobj313").attr("src", "img/Mobj_313.png");
        $(".OboxAni_314").css("animation-name", "Ani_314");
        $(".Mobj41").attr("src", "img/Mobj_41.png");
        $(".Mobj42").attr("src", "img/Mobj_42.png");
        $(".Mobj43").attr("src", "img/Mobj_43.png");
        $(".Mobj44").attr("src", "img/Mobj_44.png");
        $(".Mobj45").attr("src", "img/Mobj_45.png");
        $(".Mobj51").attr("src", "img/Mobj_51.png");
        $(".Mobj53").attr("src", "img/Mobj_53.png");
        $(".Mobj54").attr("src", "img/Mobj_54.png");
        $(".Mobj55").attr("src", "img/Mobj_55.png");
        $(".Mobj56").attr("src", "img/Mobj_56.png");
        $(".Mobj57").attr("src", "img/Mobj_57.png");
    })


    /*클릭으로 커버 없애기*/
    $(document).on("click", function() {
        clickCount = clickCount + 1;
        if (clickCount == 1) {
            $(".cover_1").css("display", "none");
        }
        if (clickCount == 2) {
            $(".cover_2").css("display", "none");

            $(".box_2").show();
            $(".Obox_25").show();
            $(".Obox_210").show();   /*박스 밖으로 보이는 개체들을 커버 없어졌을 시에만 보이게 하기*/
        }
        if (clickCount == 3) {
            $(".cover_3").css("display", "none");

            $(".Obox_31").show();
            $(".Obox_35").show();
            $(".Obox_36").show();
            $(".Obox_37").show();   /*박스 밖으로 보이는 개체들을 커버 없어졌을 시에만 보이게 하기*/
        }
        if (clickCount == 4) {
            $(".cover_4").css("display", "none");
            $(".Obox_41").show();   /*박스 밖으로 보이는 개체들을 커버 없어졌을 시에만 보이게 하기*/
        }
        if (clickCount == 5) {
            $(".cover_5").css("display", "none");
        }
        if (clickCount == 6) {
            $(".click_h").show ();
            $(".click_t").hide ();
            $(".here").show ();
            $(".switch").on("click", function() {
                $(".Obox_311").removeClass("OboxAni_311");
                $(".Obox_312").removeClass("OboxAni_312");
                $(".Obox_313").removeClass("OboxAni_313");
                $(".Obox_311, .Obox_312, .Obox_313").addClass("OboxAni_31x")
            })
        }
        if (clickCount == 7) {
            $(".click_h").hide ();
            $(".click_t").show ();
            $(".here").hide ();
        }
        if (clickCount == 8) {
            $(".click_t").hide ();
            $(".box").off("mouseover, mouseleave"); /*마우스 오버 이벤트 끄기*/

            /*마지막 클릭 시 명암 이미지로 고정*/
            $(".box1").attr("src", "img/plus_1.png");
            $(".box2").attr("src", "img/plus_2.png");
            $(".box2").addClass("fit");
            $(".box3").attr("src", "img/plus_3.png");
            $(".box4").attr("src", "img/plus_4.png");
            $(".box5").attr("src", "img/plus_5.png");

            $(".Mobj1").attr("src", "img/Pobj_1.png");
            $(".Mobj12").attr("src", "img/Pobj_12.png");
            $(".Mobj13").attr("src", "img/Pobj_13.png");
            $(".Mobj14").attr("src", "img/Pobj_14.png");
            $(".Mobj15").attr("src", "img/Pobj_15.png");
            $(".Obox_16").addClass("OboxAni_16_s");
            $(".Obox_17").addClass("OboxAni_17_s");
            $(".Mobj21").attr("src", "img/Pobj_21.png");
            $(".Mobj22").attr("src", "img/Pobj_22.png");
            $(".Mobj23").attr("src", "img/Pobj_23.png");
            $(".Mobj24").attr("src", "img/Pobj_24.png");
            $(".Mobj25").attr("src", "img/Pobj_25.png");
            $(".Mobj26").attr("src", "img/Pobj_26.png");
            $(".Mobj27").attr("src", "img/Pobj_27.png");
            $(".Mobj28").attr("src", "img/Pobj_28.png");
            $(".Mobj31").attr("src", "img/Pobj_31.png");
            $(".Mobj32").attr("src", "img/Pobj_32.png");
            $(".Mobj33").attr("src", "img/Pobj_33.png");
            $(".Mobj34").attr("src", "img/Pobj_34.png");
            $(".Mobj35").attr("src", "img/Pobj_35.png");
            $(".Mobj36").attr("src", "img/Pobj_36.png");
            $(".Mobj37").attr("src", "img/Pobj_37.png");
            $(".Mobj38").attr("src", "img/Pobj_38.png");
            $(".Mobj39").attr("src", "img/Pobj_39.png");
            $(".Mobj310").attr("src", "img/Pobj_310.png");
            $(".Mobj311").attr("src", "img/Pobj_311.png");
            $(".Mobj312").attr("src", "img/Pobj_312.png");
            $(".Mobj313").attr("src", "img/Pobj_313.png");
            $(".OboxAni_314").css("animation-name", "Ani_314_s");
            $(".Mobj41").attr("src", "img/Pobj_41.png");
            $(".Mobj42").attr("src", "img/Pobj_42.png");
            $(".Mobj43").attr("src", "img/Pobj_43.png");
            $(".Mobj44").attr("src", "img/Pobj_43.png");
            $(".Mobj45").attr("src", "img/Pobj_45.png");
            $(".Mobj51").attr("src", "img/Pobj_51.png");
            $(".Mobj53").attr("src", "img/Pobj_53.png");
            $(".Mobj54").attr("src", "img/Pobj_54.png");
            $(".Mobj55").attr("src", "img/Pobj_55.png");
            $(".Mobj56").attr("src", "img/Pobj_56.png");
            $(".Mobj57").attr("src", "img/Pobj_57.png");
        }
    })

})