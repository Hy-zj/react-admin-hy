/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-05 10:44:39
 */

import { useState, useImperativeHandle } from 'react'
import { Modal, message } from 'antd'

function InfoModal(props) {
    const [modalVisible, setModalVisible] = useState(false);
    useImperativeHandle(props.innerRef, () => ({
        showModal,
    })
    )
    const showModal = () => {
        setModalVisible(true)
    }

    const handleOk = () => {
        setModalVisible(false);
        message.success('修改用户信息成功 🎉🎉🎉');
    }
    const handleCancel = () => {
        setModalVisible(false)
    }
    return (
        <Modal title="个人信息" open={modalVisible} onOk={handleOk} onCancel={handleCancel} destroyOnClose>
            <p>个人信息</p>
        </Modal>);
}

export default InfoModal;