---
title: ONNX、TFLite、Core ML 三者区别
description: 梳理三大主流模型格式的特点、适用平台和转换方法。
date: 2026-07-08
tags: [模型格式, ONNX, TFLite, Core ML]
---

## 概览

| 格式 | 开发者 | 适用平台 | 特点 |
|------|------|------|------|
| ONNX | 微软/社区 | 跨平台 | 通用交换格式，需 Runtime 推理 |
| TFLite | Google | Android 优先 | 移动端优化好，量化工具成熟 |
| Core ML | Apple | iOS/macOS | 与苹果生态深度集成，GPU/ANE 加速 |

## 关键区别

### ONNX（Open Neural Network Exchange）

- **定位**：中间交换格式，不是最终部署格式
- **流程**：PyTorch → ONNX → ONNX Runtime 推理（或再转 TFLite / Core ML）
- **优势**：生态最广，几乎所有框架都能导出 ONNX
- **劣势**：需要额外 Runtime，包体积稍大

### TensorFlow Lite

- **定位**：Google 专为移动端和嵌入式设备设计
- **流程**：TensorFlow → TFLite Converter（支持量化）
- **优势**：Android 原生支持最好，NNAPI 硬件加速
- **劣势**：以 TensorFlow 生态为主，PyTorch 模型需要中转

### Core ML

- **定位**：苹果平台的原生推理方案
- **流程**：PyTorch → coremltools 转换 → .mlmodel
- **优势**：自动选择最佳硬件（CPU/GPU/ANE），iOS 上性能最优
- **劣势**：仅苹果生态，无法跨平台

## 我的选择

因为我的技术栈是 Flutter 三端（iOS + Android + 鸿蒙），考虑策略：

- **统一方案**：用 ONNX 作为中间格式，ONNX Runtime 做推理（C++ API），三端共享推理代码
- **极致优化**：Android 转 TFLite、iOS 转 Core ML，各自走最优路径
- **鸿蒙**：用 MindSpore Lite

接下来会分别实战这三种格式的转换和集成。
