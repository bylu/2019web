<?php
$device_type = get_device_type();
if (check_wechat_broswer() && $device_type != "ios") {
    header('Content-Type: text/plain');
    header('Content-Disposition: attachment; filename=liandong.apk');
} else {
    header('Location: http://www.baidu.com/');
}

/**
 * 判断是否在微信浏览器中
 * @return bool
 */
function check_wechat_broswer()
{
    if (strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false) {
        return true;
    }
    return false;
}


/**
 * 判断是android/ios
 * @return string
 */
function get_device_type()
{
    $agent = strtolower($_SERVER['HTTP_USER_AGENT']);
    $type = 'other';
    if (strpos($agent, 'iphone') || strpos($agent, 'ipad')) {
        $type = 'ios';
    }
    if (strpos($agent, 'android')) {
        $type = 'android';
    }
    return $type;
}