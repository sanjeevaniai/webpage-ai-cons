#!/bin/bash

# SANJEEVANI AI Case Studies Dashboard Launcher
# This script launches the Streamlit dashboard for case studies

echo "🏥 SANJEEVANI AI Case Studies Dashboard"
echo "======================================"

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed or not in PATH"
    echo "Please install Python 3 and try again"
    exit 1
fi

# Check if requirements are installed
echo "🔍 Checking dependencies..."
if ! python3 -c "import streamlit, pandas, plotly, numpy" 2>/dev/null; then
    echo "📦 Installing required dependencies..."
    pip3 install -r requirements.txt
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
fi

echo "✅ Dependencies are ready"

# Launch Streamlit
echo "🚀 Launching Streamlit dashboard..."
echo "📊 Dashboard will open at: http://localhost:8501"
echo "⏹️  Press Ctrl+C to stop the server"
echo ""

python3 launch_streamlit.py
