#!/bin/sh
XWARE_DIR=./Xware
USERNAME="thunder"
code="hzsmti"
# 下载绝对路径
DOWN_DIR=/home/jxyu/TDDownload
# 挂载路径
MOUNT_DIR=/media/thunder/TDDownload
if [ $# -gt 0 ];
then
    # 加参数 -s是关闭
    su $USERNAME -c "$XWARE_DIR/portal -s"
    code=$?
    if [ $code -eq 0 ];
    then
        umount $MOUNT_DIR
        echo "xware stop sucess..."
    else
        echo "xware stop fail,code $code"
    fi
else
    # 不加参数默认是启动
    su $USERNAME -c $XWARE_DIR/portal
    code=$?
    if [ $code -eq 0 ];
    then
        mount --bind $DOWN_DIR $MOUNT_DIR
        echo "xware start sucess..."
    else
        echo "xware start fail,code $code"
    fi
fi

#hzsmti
