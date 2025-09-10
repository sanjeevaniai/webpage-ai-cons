#!/usr/bin/env python3
"""
Launch script for SANJEEVANI AI Case Studies Streamlit Dashboard
"""

import subprocess
import sys
import os
import webbrowser
import time
from pathlib import Path

def check_dependencies():
    """Check if required dependencies are installed"""
    try:
        import streamlit
        import pandas
        import plotly
        import numpy
        print("✅ All dependencies are installed")
        return True
    except ImportError as e:
        print(f"❌ Missing dependency: {e}")
        print("Please install requirements: pip install -r requirements.txt")
        return False

def launch_streamlit():
    """Launch the Streamlit app"""
    if not check_dependencies():
        return False
    
    # Get the directory of this script
    script_dir = Path(__file__).parent
    streamlit_app = script_dir / "streamlit_app.py"
    
    if not streamlit_app.exists():
        print(f"❌ Streamlit app not found at {streamlit_app}")
        return False
    
    print("🚀 Launching SANJEEVANI AI Case Studies Dashboard...")
    print("📊 Dashboard will open in your default browser")
    print("🔗 URL: http://localhost:8501")
    print("⏹️  Press Ctrl+C to stop the server")
    print("-" * 50)
    
    try:
        # Launch Streamlit
        subprocess.run([
            sys.executable, "-m", "streamlit", "run", 
            str(streamlit_app),
            "--server.port", "8501",
            "--server.address", "localhost",
            "--browser.gatherUsageStats", "false"
        ])
    except KeyboardInterrupt:
        print("\n👋 Dashboard stopped. Thank you for using SANJEEVANI AI!")
    except Exception as e:
        print(f"❌ Error launching Streamlit: {e}")
        return False
    
    return True

if __name__ == "__main__":
    print("🏥 SANJEEVANI AI Case Studies Dashboard")
    print("=" * 50)
    
    success = launch_streamlit()
    
    if not success:
        print("\n❌ Failed to launch dashboard. Please check the error messages above.")
        sys.exit(1)
