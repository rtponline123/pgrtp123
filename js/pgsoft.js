var x = [0, 283, 10, 584, 919, 369, 457, 574, 776, 327, 518, 86, 898, 731, 993, 402, 17, 268, 222, 9, 15, 233, 172, 96, 592, 950, 591, 253, 239, 589, 656, 975, 500, 694, 176, 371, 721, 749, 781, 587, 226, 170, 375, 178, 579, 46, 526, 684, 301, 30, 572, 69, 938, 469, 760, 196, 370, 277, 508, 429, 695, 148, 217, 903, 409, 104, 522, 918, 32, 329, 823, 158, 725, 704, 504, 664, 517, 809, 840, 897, 18, 193, 609, 831, 542, 37, 286, 722, 116, 708, 836, 645, 955, 524, 306, 251, 477, 168, 989, 667, 27, 56, 764, 886, 754, 688, 941, 265, 337, 833, 802, 480, 846, 51, 548, 247, 611, 133, 940, 461, 963, 549, 214, 386, 95, 942, 490, 478, 332, 313, 791, 865, 276, 302, 636, 85, 980, 61, 238, 348, 697, 580, 249, 627, 947, 331, 976, 315, 155, 613, 622, 394, 869, 202, 359, 88, 818, 962, 144, 891, 132, 767, 739, 93, 462, 978, 448, 493, 114, 788, 960, 432, 531, 156, 294, 282, 899, 995, 746, 987, 924, 47, 48, 748, 930, 14, 5, 390, 336, 691, 404, 245, 137, 971, 446, 847, 288, 878, 290, 456, 935];
for (let i = 1; i <= 200; i++) {
    const d = new Date();
    var date = d.getUTCDate();
    var day = d.getUTCDay() + 1;
    var year = d.getUTCFullYear();
    var month = d.getUTCMonth() + 1;
    var hour = d.getUTCHours();
    var min = d.getMinutes();
    if (min < 30) {
        min = 1;
    } else {
        min = 2;
    }
    var xx = day + year * month * date;
    xx = Math.pow(xx, hour * min);
    xx = xx * x[i];
    // xx = xx * 2 - 1;
    // xx = xx/2;

    if (i == 3 || i == 7 || i == 1 || i == 2 || i == 14 || i == 28 || i == 17 || i == 9 || i == 18 || i == 62 || i == 55 || i == 11 || i == 29 || i == 24 || i == 8 || i == 34 || i == 16) {
        xx = xx % 30;
        xx += 65;
    } else {
        xx = xx % 83;
        xx += 8;
    }
    const as = "percent-bar-" + i;
    const asd = "percent-txt-" + i;
    var percentTxt = document.getElementById("percent-txt-" + i);
    var bar = document.getElementById("percent-bar-" + i);
    const bartext = document.getElementById("card-title" + i);
    percentTxt.innerHTML = xx + "%";
    $("#percent-bar-" + i)
        .attr("aria-valuenow", xx)
        .css("width", xx + "%");
    if (xx < 30) {
        bar.classList.add("red");
    } else if (xx > 70) {
        bar.classList.add("green");
    } else {
        bar.classList.add("yellow");
    }
}